import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

import { testAction } from './../actions'

function mapStateToProps(state) {
  return {}
}

class Test extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log('here')
  }

  render() {
    return (
      <View>
        <Text>Testссс</Text>
      </View>
    )
  }
}

export default connect(mapStateToProps, { testAction })(Test)