import {StyleSheet} from 'react-native';

const styles = StyleSheet.create ({

    

//Box e containers    
    container: {
        margin:16,
    },iconDimension: {
        height: 24, 
        width:24,
    },iconContainer:{
        height:48,
        width:48,
        margin:8,
        justifyContent: "center",
        alignItems:'center'
    }, commentBox:{
        backgroundColor: '#f5f5f5',
        marginVertical: 16,
        padding: 12,
    },
    

    //Texto
    imputLabel:{
        color: '#000', fontSize: 14, marginTop: 8
    }, imputText:{
        color:'#000' ,backgroundColor: '#ffffff', height: 96, marginVertical: 16, fontSize: 16, padding: 12, borderColor: '#000', borderWidth: 1, textAlignVertical: 'top'
    },bodyText:{ 
        fontSize: 16, marginTop: 16
    },BodyTextSecondary:{ 
        fontSize: 14,
    },h1:{
        fontSize: 20, marginTop: 16, fontWeight: 'bold'
    },h2:{
        fontSize: 18, marginTop: 16, fontWeight: 'bold'
    },h3:{
        fontSize: 16, marginTop: 16, fontWeight: 'bold'
    },h4:{
        fontSize: 14, fontWeight: 'bold'
    },
    
    
    //Botões
    primaryButton:{
        backgroundColor: '#000', height: 48, justifyContent: 'center', marginVertical: 16,
    },secondaryButton:{
         height: 48, justifyContent: 'center', marginVertical: 16, borderColor: '#000', borderWidth: 1
    }, primaryButtonText:{
        color: '#fff', fontSize: 16, fontWeight: 'bold', alignSelf: 'center'
    }, secondaryButtonText:{
        color: '#000', fontSize: 16, fontWeight: 'bold', alignSelf: 'center'
    },
    
    //Divisor
    divisor:{
        backgroundColor: '#000', height: 2, 
    }, 
    
    
}) 

export default styles