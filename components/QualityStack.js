import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack =  createNativeStackNavigator()

const QualityStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home"       component={HomeScreen}/>
            <Stack.Screen name="Teacher"    component={TeacherScreen}/>
            <Stack.Screen name="Subject"    component={SucjectScreen}/>
            <Stack.Screen name="Questions"  component={QuestionsScreen}/>
        </Stack.Navigator>
    )
}

export default QualityStack