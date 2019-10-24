import React from 'react'
import { connect } from "react-redux"
import { fetchList, resetList } from "./actions"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

const link = React.forwardRef<HTMLAnchorElement, RouterLinkProps>((props, ref) => (
  <RouterLink innerRef={ref} {...props} />
));

class ItemList extends React.Component {
  componentDidMount() {
    (this.props as any).fetchList((this.props as any).match.params.category)
  }

  componentWillUnmount() {
    (this.props as any).resetList()
  }

  fetchNewList(url: string) {
    const category = (this.props as any).match.params.category;
    const param = url.split("/").pop();
    (this.props as any).fetchList(category, param)
  }

  render() {
    let listItems: Array<object> = []
    for (const index in (this.props as any).list_items) {
      const item = (this.props as any).list_items[index]
      listItems.push(
        <ListItem
          key={item[(this.props as any).displayField] + index}
          component={link}
          to={"/" + (this.props as any).match.params.category + "/" + index + "/"}
          button>
            <ListItemText color="primary" primary={item[(this.props as any).displayField]} />
        </ListItem>
      )
    }
    console.log("prev: " + (this.props as any).prev_url)
    console.log("next: " + (this.props as any).next_url)
    return (
      <Card>
        <CardContent>
          <Typography variant="h5" align="left" >
            {(this.props as any).match.params.category}
          </Typography>
          <List>
            { listItems }
          </List>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            disabled={!(this.props as any).prev_url}
            component={link}
            to={"/" + (this.props as any).match.params.category}
            onClick={() => {this.fetchNewList((this.props as any).prev_url)}}>
              Prev
          </Button>
          <Button
            size="small"
            disabled={!(this.props as any).next_url}
            component={link}
            to={"/" + (this.props as any).match.params.category}
            onClick={() => {this.fetchNewList((this.props as any).next_url)}}>
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
