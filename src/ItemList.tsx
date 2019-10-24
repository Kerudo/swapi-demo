// package imports
import React from 'react'
import { connect } from "react-redux"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

//local imports
import { fetchList, resetList } from "./actions"

// react-redux-router-mui snippet to make buttons work nicely with routes
const link = React.forwardRef<HTMLAnchorElement, RouterLinkProps>((props, ref) => (
  <RouterLink innerRef={ref} {...props} />
));

type ItemListProps = {
  displayField: string,
  fetchList: any,
  history: any,
  list_items: Array<any>,
  location: object,
  match: any,
  next_url: string,
  prev_url: string,
  resetList: any,
  staticContent: any
}

class ItemList extends React.Component<ItemListProps> {
  componentDidMount() {
    // start fetch of list after component has mounted
    this.props.fetchList(this.props.match.params.category)
  }

  componentWillUnmount() {
    // reset the stored list to blank when changing categories to avoid flash of wrong data
    this.props.resetList()
  }

  fetchNewList(url: string) {
    const category = this.props.match.params.category;
    // api returns a full url - since we need a partial for the proxy to work
    // we need to split it up and grab the parameter off the end
    const param = url.split("/").pop();
    this.props.fetchList(category, param)
  }

  render() {
    let listItems: Array<object> = []
    for (const index in this.props.list_items) {
      const item = this.props.list_items[index]
      listItems.push(
        <ListItem
          key={item[this.props.displayField] + index}
          component={link}
          to={"/" + this.props.match.params.category + "/" + index + "/"}
          button>
            <ListItemText color="primary" primary={item[this.props.displayField]} />
        </ListItem>
      )
    }

    return (
      <Card>
        <CardContent>
          <Typography variant="h5" align="left" >
            {this.props.match.params.category}
          </Typography>
          <List>
            { listItems }
          </List>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            disabled={!this.props.prev_url}
            component={link}
            to={"/" + this.props.match.params.category}
            onClick={() => {this.fetchNewList(this.props.prev_url)}}>
              Prev
          </Button>
          <Button
            size="small"
            disabled={!this.props.next_url}
            component={link}
            to={"/" + this.props.match.params.category}
            onClick={() => {this.fetchNewList(this.props.next_url)}}>
              Next
          </Button>
        </CardActions>
      </Card>
    )
  }
}

const mapStateToProps = (state: any, ownProps: any) => ({
  list_items: state.app.list_data.results,
  prev_url: state.app.list_data.previous,
  next_url: state.app.list_data.next
});

export default connect(mapStateToProps, {fetchList, resetList})(ItemList)
