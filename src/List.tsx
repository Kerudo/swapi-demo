import React from 'react'
import { connect } from "react-redux"
import { fetchList } from "./actions"

class List extends React.Component {
  constructor(props: object) {
    super(props)
  }

  componentWillMount() {
    (this.props as any).fetchList((this.props as any).match.params.category)
  }

  render() {
    return (
      <div className="List">

      </div>
    )
  }
}

const mapStateToProps = (state: object, ownProps: object) => ({

});

export default connect(mapStateToProps, {fetchList})(List)
