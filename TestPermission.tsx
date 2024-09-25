import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Can } from './casl/Can';
import { useAbility } from './casl/useAbility';

type Props = {}

const TestPermission = (props: Props) => {

    const ability = useAbility()

    return (
        <View>
            <Text>TestPermission</Text>
            {
                ability.can("read", "regcard") && <Text>can read</Text>
            }
            <Can I="read" a="addhaar">
                <Button title='click' />
            </Can>
        </View>

    )
}

export default TestPermission

const styles = StyleSheet.create({})