import React from 'react'
import { connect } from "react-redux"
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

type ItemDetailProps = {
  displayFields: Array<string>,
  history: any,
  list_items: Array<any>,
  location: any,
  match: any,
  staticContent: any
}

class ItemDetail extends React.Component<ItemDetailProps> {
  render() {
    let displayFields : Array<object> = []
    let fields = this.props.displayFields.slice(1)
    for (const field of fields) {
      const id = this.props.match.params.id
      // ugly nested ternary because we can sometimes render before the API has returned results
      const value = !this.props.list_items
        ? undefined
        : !this.props.list_items[id]
          ? undefined
          : this.props.list_items[id][field]

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
      <Card>
        <CardContent>
          <Typography variant="h5" align="left" gutterBottom>
            {!this.props.list_items[this.props.match.params.id]
              ? undefined
              : this.props.list_items[this.props.match.params.id][this.props.displayFields[0]]}
          </Typography>
          <Grid container direction="column" alignItems="flex-start" spacing={2}>
            { displayFields }
          </Grid>
        </CardContent>
      </Card>
    )
  }
}

const mapStateToProps = (state: any, ownProps: any) => ({
  list_items: state.app.list_data.results
});

export default connect(mapStateToProps, {})(ItemDetail)
