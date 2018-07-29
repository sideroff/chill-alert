import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/dist/FontAwesome';


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
        <Text>Testсadadadadсс</Text>
        <Icon name='rocket' />
      </View>
    )
  }
}

export default connect(mapStateToProps, { testAction })(Test)