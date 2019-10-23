import React from 'react'
import { connect } from "react-redux"
import { fetchList } from "./actions"
import List from '@material-ui/core/List'
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class ItemList extends React.Component {
  constructor(props: object) {
    super(props)
  }

  componentWillMount() {
    (this.props as any).fetchList((this.props as any).match.params.category)
  }

  render() {
    let listItems: Array<object> = []
    for (const item of (this.props as any).list_items) {
      listItems.push(
        <ListItem key={item[(this.props as any).displayField]} button>
          <ListItemText color="primary" primary={item[(this.props as any).displayField]} />
        </ListItem>
      )
    }
    return (
      <div className="ItemList">
        <List>
          { listItems }
        </List>
      </div>
    )
  }
}

const mapStateToProps = (state: any, ownProps: any) => ({
  list_items: state.app.list_data.results
});

export default connect(mapStateToProps, {fetchList})(ItemList)
