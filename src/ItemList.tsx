import React from 'react'
import { connect } from "react-redux"
import { fetchList } from "./actions"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List'
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

const link = React.forwardRef<HTMLAnchorElement, RouterLinkProps>((props, ref) => (
  <RouterLink innerRef={ref} {...props} />
));

class ItemList extends React.Component {
  constructor(props: object) {
    super(props)
  }

  componentWillMount() {
    (this.props as any).fetchList((this.props as any).match.params.category)
  }

  render() {
    let listItems: Array<object> = []
    for (const index in (this.props as any).list_items) {
      const item = (this.props as any).list_items[index]
      listItems.push(
        <ListItem key={item[(this.props as any).displayField]} component={link} to={"/" + (this.props as any).match.params.category + "/" + index + "/"} button>
          <ListItemText color="primary" primary={item[(this.props as any).displayField]} />
        </ListItem>
      )
    }
    return (
      <div className="ItemList">
        <Card>
          <CardContent>
            <Typography variant="h5" align="left" >
              {(this.props as any).match.params.category}
            </Typography>
            <List>
              { listItems }
            </List>
          </CardContent>
        </Card>
      </div>
    )
  }
}

const mapStateToProps = (state: any, ownProps: any) => ({
  list_items: state.app.list_data.results
});

export default connect(mapStateToProps, {fetchList})(ItemList)
