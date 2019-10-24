import React from 'react'
import { connect } from "react-redux"
import { fetchSpecific } from "./actions"
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

class ItemDetail extends React.Component {
  constructor(props: object) {
    super(props)
  }

  render() {
    let displayFields : Array<object> = []
    for (const field of (this.props as any).displayFields) {
      const id = (this.props as any).match.params.id
      // ugly nested ternary because we can sometimes render before the API has returned results
      const value = !(this.props as any).list_items
        ? undefined
        : !(this.props as any).list_items[id]
          ? undefined
          : (this.props as any).list_items[id][field]

      displayFields.push(
        <Grid item key={field}>
          <Typography variant="caption" align="left" display="block">
            {field.replace("_", " ")}
          </Typography>
          <Typography align="left">
            {value}
          </Typography>
        </Grid>
      )
    }
    return (
      <div className="ItemDetail">
        <Card>
          <CardContent>
            <Typography variant="h5" align="left" gutterBottom>
              {!(this.props as any).list_items[(this.props as any).match.params.id] ? undefined : (this.props as any).list_items[(this.props as any).match.params.id]["name"]}
              {!(this.props as any).list_items[(this.props as any).match.params.id] ? undefined : (this.props as any).list_items[(this.props as any).match.params.id]["title"]}
            </Typography>
            <Grid container direction="column" alignItems="flex-start" spacing={2}>
              { displayFields }
            </Grid>
          </CardContent>
        </Card>
      </div>
    )
  }
}

const mapStateToProps = (state: any, ownProps: any) => ({
  list_items: state.app.list_data.results
});

export default connect(mapStateToProps, {fetchSpecific})(ItemDetail)