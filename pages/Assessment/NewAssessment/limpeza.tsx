import React, {useState, useEffect}from 'react';
import AddPhoto from "../../../AddPhoto";


import {
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    FlatList,
  } from 'react-native';

  import {pergunta, descricao} from '../../api_back'

  import styles from '../../style/styles';

  const One = require ('../../../icons/grade11x.png')
  const OneSelected = require ('../../../icons/grade1-selected1x.png')


  export default function Limpeza({navigation}) {
    
    const [pergunta_txt, setPergunta] = useState([0,0,0,0]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await pergunta.get('/3')
            setPergunta(response.data)
            
                console.log(response.data)
            };
        fetchData();
    },[]);

    const [descricao_txt, setDescricao] = useState({3.1:[0,0,0,0]});
    useEffect(() => {
        const fetchData2 = async () => {
            const response = await descricao.get('/3')
            setDescricao(response.data)
            
                console.log(response.data)
            };
        fetchData2();
    },[]);

    // Data para Flatlist
    const formLimpeza = [
        {question: '1.1. Utilização dos recursos existentes nos locais abertos', id: '1'},
        {question: '1.2. Utilização dos recursos existentes nos locais fechados', id: '2'},
        {question: '1.3. Estado de conservação de instalações e recursos ', id: '3'},
        {question: '1.4. Controle dos problemas de conservação', id: '4'},
    ];
    
    //botão funcionar e trocar
     const iconOne = {One, OneSelected}
     
    const [iconOneSelected, setIconOneSelected] = useState(iconOne.One);
    const answer = () => {
        setIconOneSelected(iconOne.OneSelected);
        setNoteDescription(true)
    }

    //Condicional para aparecer descritivo da nota (in progress)
    const [noteDescription, setNoteDescription] = useState(false)
    const noteOne = () => {
        return(
        <View style={styles.commentBox}>
            <Text style= {styles.h4}>Descrição da nota</Text>
            <Text style = {styles.BodyTextSecondary}>Em vários locais foram encontradas diversas anormalidades no uso e adequação de recursos (não compartilhamento, excesso, improvisações, recursos desnecessários, recursos inadequados ou usados inadequadamente, falta ou desperdício</Text>
        </View>
        )
    }

    const openCamera = () => {
        AddPhoto
    } 
   
    const [l1, setl1] = useState(0)
    function alteral11 () {setl1(1)}
    function alteral12 () {setl1(2)}
    function alteral13 () {setl1(3)}
    function alteral14 () {setl1(4)}
    function alteral15 () {setl1(5)}
    
    const renderCondL1 = () => {
        switch (l1) {
            case 1:
                return (
                    <View style={styles.commentBox}>
                        <Text style= {styles.h4}>Descrição da nota</Text>
                <Text style = {styles.BodyTextSecondary}>{descricao_txt["3.1"][0].descricao}</Text>
                    </View>
                )
                break;
             case 2:
                return (
                    <View style={styles.commentBox}>
                        <Text style= {styles.h4}>Descrição da nota</Text>
                        <Text style = {styles.BodyTextSecondary}>{descricao_txt["3.1"][1].descricao} </Text>
                    </View>
                )
                break;
             case 3:
                return (
                    <View style={styles.commentBox}>
                        <Text style= {styles.h4}>Descrição da nota</Text>
                        <Text style = {styles.BodyTextSecondary}>{descricao_txt["3.1"][2].descricao} </Text>
                    </View>
                )
                break;
             case 4:
                return (
                    <View style={styles.commentBox}>
                        <Text style= {styles.h4}>Descrição da nota</Text>
                        <Text style = {styles.BodyTextSecondary}> {descricao_txt["3.1"][3].descricao} </Text>
                    </View>
                )
                break;
             case 5:
                return (
                    <View style={styles.commentBox}>
                        <Text style= {styles.h4}>Descrição da nota</Text>
                        <Text style = {styles.BodyTextSecondary}> {descricao_txt["3.1"][4].descricao}</Text>
                    </View>
                )
                break;
            default:
                "padrão"
                break;
        }
    }
     
    
    const [l2, setl2] = useState(0)
    function alteral21 () {setl2(1)}
    function alteral22 () {setl2(2)}
    function alteral23 () {setl2(3)}
    function alteral24 () {setl2(4)}
    function alteral25 () {setl2(5)}
    
    const renderCondL2 = () => {
        switch (l2) {
            case 1:
                return (
                    <View style={styles.commentBox}>
                        <Text style= {styles.h4}>Descrição da nota</Text>
                        <Text style = {styles.BodyTextSecondary}>{descricao_txt["3.2"][0].descricao}</Text>
                    </View>
                )
                break;
             case 2:
                return (
                    <View style={styles.commentBox}>
                        <Text style= {styles.h4}>Descrição da nota</Text>
                        <Text style = {styles.BodyTextSecondary}> {descricao_txt["3.2"][1].descricao} </Text>
                    </View>
                )
                break;
             case 3:
                return (
                    <View style={styles.commentBox}>
                        <Text style= {styles.h4}>Descrição da nota</Text>
                        <Text style = {styles.BodyTextSecondary}> {descricao_txt["3.2"][2].descricao} </Text>
                    </View>
                )
                break;
             case 4:
                return (
                    <View style={styles.commentBox}>
                        <Text style= {styles.h4}>Descrição da nota</Text>
                        <Text style = {styles.BodyTextSecondary}> {descricao_txt["3.2"][3].descricao} </Text>
                    </View>
                )
                break;
             case 5:
                return (
                    <View style={styles.commentBox}>
                        <Text style= {styles.h4}>Descrição da nota</Text>
                        <Text style = {styles.BodyTextSecondary}> {descricao_txt["3.2"][4].descricao} </Text>
                    </View>
                )
                break;
            default:
                "padrão"
                break;
        }
    }

    const [l3, setl3] = useState(0)
    function alteral31 () {setl3(1)}
    function alteral32 () {setl3(2)}
    function alteral33 () {setl3(3)}
    function alteral34 () {setl3(4)}
    function alteral35 () {setl3(5)}
    
    const renderCondL3 = () => {
        switch (l3) {
            case 1:
                return (
                    <View style={styles.commentBox}>
                        <Text style= {styles.h4}>Descrição da nota</Text>
                        <Text style = {styles.BodyTextSecondary}>{descricao_txt["3.3"][0].descricao}</Text>
                    </View>
                )
                break;
             case 2:
                return (
                    <View style={styles.commentBox}>
                        <Text style= {styles.h4}>Descrição da nota</Text>
                        <Text style = {styles.BodyTextSecondary}>  {descricao_txt["3.3"][1].descricao} </Text>
                    </View>
                )
                break;
             case 3:
                return (
                    <View style={styles.commentBox}>
                        <Text style= {styles.h4}>Descrição da nota</Text>
                        <Text style = {styles.BodyTextSecondary}> {descricao_txt["3.3"][2].descricao} </Text>
                    </View>
                )
                break;
             case 4:
                return (
                    <View style={styles.commentBox}>
                        <Text style= {styles.h4}>Descrição da nota</Text>
                        <Text style = {styles.BodyTextSecondary}> {descricao_txt["3.3"][3].descricao} </Text>
                    </View>
                )
                break;
             case 5:
                return (
                    <View style={styles.commentBox}>
                        <Text style= {styles.h4}>Descrição da nota</Text>
                        <Text style = {styles.BodyTextSecondary}> {descricao_txt["3.3"][4].descricao} </Text>
                    </View>
                )
                break;
            default:
                "padrão"
                break;
        }
    }

    const [l4, setl4] = useState(0)
    function alteral41 () {setl4(1)}
    function alteral42 () {setl4(2)}
    function alteral43 () {setl4(3)}
    function alteral44 () {setl4(4)}
    function alteral45 () {setl4(5)}
    
    const renderCondL4 = () => {
        switch (l4) {
            case 1:
                return (
                    <View style={styles.commentBox}>
                        <Text style= {styles.h4}>Descrição da nota</Text>
                        <Text style = {styles.BodyTextSecondary}>{descricao_txt["3.4"][0].descricao}</Text>
                    </View>
                )
                break;
             case 2:
                return (
                    <View style={styles.commentBox}>
                        <Text style= {styles.h4}>Descrição da nota</Text>
                        <Text style = {styles.BodyTextSecondary}> {descricao_txt["3.4"][1].descricao} </Text>
                    </View>
                )
                break;
             case 3:
                return (
                    <View style={styles.commentBox}>
                        <Text style= {styles.h4}>Descrição da nota</Text>
                        <Text style = {styles.BodyTextSecondary}> {descricao_txt["3.4"][2].descricao} </Text>
                    </View>
                )
                break;
             case 4:
                return (
                    <View style={styles.commentBox}>
                        <Text style= {styles.h4}>Descrição da nota</Text>
                        <Text style = {styles.BodyTextSecondary}> {descricao_txt["3.4"][3].descricao} </Text>
                    </View>
                )
                break;
             case 5:
                return (
                    <View style={styles.commentBox}>
                        <Text style= {styles.h4}>Descrição da nota</Text>
                        <Text style = {styles.BodyTextSecondary}> {descricao_txt["3.4"][4].descricao} </Text>
                    </View>
                )
                break;
            default:
                "padrão"
                break;
        }
    }

    const [l5, setl5] = useState(0)
    function alteral51 () {setl5(1)}
    function alteral52 () {setl5(2)}
    function alteral53 () {setl5(3)}
    function alteral54 () {setl5(4)}
    function alteral55 () {setl5(5)}
    
    const renderCondL5 = () => {
        switch (l5) {
            case 1:
                return (
                    <View style={styles.commentBox}>
                        <Text style= {styles.h4}>Descrição da nota</Text>
                        <Text style = {styles.BodyTextSecondary}>{descricao_txt["3.5"][0].descricao}</Text>
                    </View>
                )
                break;
             case 2:
                return (
                    <View style={styles.commentBox}>
                        <Text style= {styles.h4}>Descrição da nota</Text>
                        <Text style = {styles.BodyTextSecondary}> {descricao_txt["3.5"][1].descricao} </Text>
                    </View>
                )
                break;
             case 3:
                return (
                    <View style={styles.commentBox}>
                        <Text style= {styles.h4}>Descrição da nota</Text>
                        <Text style = {styles.BodyTextSecondary}> {descricao_txt["3.5"][2].descricao} </Text>
                    </View>
                )
                break;
             case 4:
                return (
                    <View style={styles.commentBox}>
                        <Text style= {styles.h4}>Descrição da nota</Text>
                        <Text style = {styles.BodyTextSecondary}> {descricao_txt["3.5"][3].descricao} </Text>
                    </View>
                )
                break;
             case 5:
                return (
                    <View style={styles.commentBox}>
                        <Text style= {styles.h4}>Descrição da nota</Text>
                        <Text style = {styles.BodyTextSecondary}> {descricao_txt["3.5"][4].descricao} </Text>
                    </View>
                )
                break;
            default:
                "padrão"
                break;
        }
    }

    

       return (

        <ScrollView>
            <View style= {{backgroundColor: '#fff'}}> 
                <View style={styles.container}>
                    <View>
                        <Text style= {styles.h2}> Limpeza</Text>
                        </View>
                        <View>
                        <Text style={styles.bodyText}>{pergunta_txt[0].titulo} {pergunta_txt[0].descricao} </Text>
                        {/* <View><Text>{pergunta_txt.map(item=><Text>{item.titulo}</Text>)}</Text></View>  */}
                            {/* <View><Text>{pergunta_txt[0].titulo} {pergunta_txt[0].descricao}</Text></View>  */}
                            {/* <Text style={styles.bodyText}> {pergunta_txt.map((item,index)=><Text key={index}><Text>{item.titulo}</Text></Text>)}</Text> */}
                            <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 24}}>
                                <TouchableOpacity style={styles.iconContainer} onPress={alteral11}><Image style={styles.iconDimension} source={iconOneSelected}/></TouchableOpacity>
                                <TouchableOpacity style={styles.iconContainer} onPress={alteral12}><Image style={styles.iconDimension} source={require("../../../icons/grade24x.png")} /></TouchableOpacity>
                                <TouchableOpacity style={styles.iconContainer} onPress={alteral13}><Image style={styles.iconDimension} source={require("../../../icons/grade34x.png")}/></TouchableOpacity>
                                <TouchableOpacity style={styles.iconContainer} onPress={alteral14}><Image style={styles.iconDimension} source={require("../../../icons/grade44x.png")}/></TouchableOpacity>
                                <TouchableOpacity style={styles.iconContainer} onPress={alteral15}><Image style={styles.iconDimension} source={require("../../../icons/grade54x.png")}/></TouchableOpacity>
                            </View>
                            </View>
                            {renderCondL1()}
                             <Text style={styles.imputLabel}> Justifique: </Text>
                             <TextInput style= {styles.imputText}>Escreva aqui sua justificativa</TextInput>
                             <TouchableOpacity style={styles.secondaryButton} onPress={() => navigation.navigate ("Evidencia")} > 
                                 <Text style={styles.secondaryButtonText}>Adicionar evidência</Text>
                             </TouchableOpacity>
                             <View style={styles.divisor}></View>

                             <View>
                            <Text style={styles.bodyText}>{pergunta_txt[1].titulo} {pergunta_txt[1].descricao} </Text>
                            {/* <View><Text>{pergunta_txt[0].titulo} {pergunta_txt[0].descricao}</Text></View> */}
                            <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 24}}>
                                <TouchableOpacity style={styles.iconContainer} onPress={alteral21}><Image style={styles.iconDimension} source={iconOneSelected}/></TouchableOpacity>
                                <TouchableOpacity style={styles.iconContainer} onPress={alteral22}><Image style={styles.iconDimension} source={require("../../../icons/grade24x.png")} /></TouchableOpacity>
                                <TouchableOpacity style={styles.iconContainer} onPress={alteral23}><Image style={styles.iconDimension} source={require("../../../icons/grade34x.png")}/></TouchableOpacity>
                                <TouchableOpacity style={styles.iconContainer} onPress={alteral24}><Image style={styles.iconDimension} source={require("../../../icons/grade44x.png")}/></TouchableOpacity>
                                <TouchableOpacity style={styles.iconContainer} onPress={alteral25}><Image style={styles.iconDimension} source={require("../../../icons/grade54x.png")}/></TouchableOpacity>
                            </View>
                            </View>
                            {renderCondL2()}
                             <Text style={styles.imputLabel}> Justifique: </Text>
                             <TextInput style= {styles.imputText}>Escreva aqui sua justificativa</TextInput>
                             <TouchableOpacity style={styles.secondaryButton} onPress={() => navigation.navigate ("Evidencia")} > 
                                 <Text style={styles.secondaryButtonText}>Adicionar evidência</Text>
                             </TouchableOpacity>
                             <View style={styles.divisor}></View>

                             <View>
                             <Text style={styles.bodyText}>{pergunta_txt[2].titulo} {pergunta_txt[2].descricao} </Text>
                            {/* <Text style={styles.bodyText}> {item.titulo} {item.descricao} </Text> */}
                            <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 24}}>
                                <TouchableOpacity style={styles.iconContainer} onPress={alteral31}><Image style={styles.iconDimension} source={iconOneSelected}/></TouchableOpacity>
                                <TouchableOpacity style={styles.iconContainer} onPress={alteral32}><Image style={styles.iconDimension} source={require("../../../icons/grade24x.png")} /></TouchableOpacity>
                                <TouchableOpacity style={styles.iconContainer} onPress={alteral33}><Image style={styles.iconDimension} source={require("../../../icons/grade34x.png")}/></TouchableOpacity>
                                <TouchableOpacity style={styles.iconContainer} onPress={alteral34}><Image style={styles.iconDimension} source={require("../../../icons/grade44x.png")}/></TouchableOpacity>
                                <TouchableOpacity style={styles.iconContainer} onPress={alteral35}><Image style={styles.iconDimension} source={require("../../../icons/grade54x.png")}/></TouchableOpacity>
                            </View>
                            </View>
                            {renderCondL3()}
                             <Text style={styles.imputLabel}> Justifique: </Text>
                             <TextInput style= {styles.imputText}>Escreva aqui sua justificativa</TextInput>
                             <TouchableOpacity style={styles.secondaryButton} onPress={() => navigation.navigate ("Evidencia")} > 
                                 <Text style={styles.secondaryButtonText}>Adicionar evidência</Text>
                             </TouchableOpacity>
                             <View style={styles.divisor}></View>

                             <View>
                             <Text style={styles.bodyText}>{pergunta_txt[3].titulo} {pergunta_txt[3].descricao} </Text>
                            {/* <Text style={styles.bodyText}> {item.titulo} {item.descricao} </Text> */}
                            <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 24}}>
                                <TouchableOpacity style={styles.iconContainer} onPress={alteral41}><Image style={styles.iconDimension} source={iconOneSelected}/></TouchableOpacity>
                                <TouchableOpacity style={styles.iconContainer} onPress={alteral42}><Image style={styles.iconDimension} source={require("../../../icons/grade24x.png")} /></TouchableOpacity>
                                <TouchableOpacity style={styles.iconContainer} onPress={alteral43}><Image style={styles.iconDimension} source={require("../../../icons/grade34x.png")}/></TouchableOpacity>
                                <TouchableOpacity style={styles.iconContainer} onPress={alteral44}><Image style={styles.iconDimension} source={require("../../../icons/grade44x.png")}/></TouchableOpacity>
                                <TouchableOpacity style={styles.iconContainer} onPress={alteral45}><Image style={styles.iconDimension} source={require("../../../icons/grade54x.png")}/></TouchableOpacity>
                            </View>
                            </View>
                            {renderCondL4()}
                             <Text style={styles.imputLabel}> Justifique: </Text>
                             <TextInput style= {styles.imputText}>Escreva aqui sua justificativa</TextInput>
                             <TouchableOpacity style={styles.secondaryButton} onPress={() => navigation.navigate ("Evidencia")} > 
                                 <Text style={styles.secondaryButtonText}>Adicionar evidência</Text>
                             </TouchableOpacity>
                             <View style={styles.divisor}></View>

                             <View>
                            {/* <Text style={styles.bodyText}> {item.titulo} {item.descricao} </Text> */}
                            <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 24}}>
                                <TouchableOpacity style={styles.iconContainer} onPress={alteral51}><Image style={styles.iconDimension} source={iconOneSelected}/></TouchableOpacity>
                                <TouchableOpacity style={styles.iconContainer} onPress={alteral52}><Image style={styles.iconDimension} source={require("../../../icons/grade24x.png")} /></TouchableOpacity>
                                <TouchableOpacity style={styles.iconContainer} onPress={alteral53}><Image style={styles.iconDimension} source={require("../../../icons/grade34x.png")}/></TouchableOpacity>
                                <TouchableOpacity style={styles.iconContainer} onPress={alteral54}><Image style={styles.iconDimension} source={require("../../../icons/grade44x.png")}/></TouchableOpacity>
                                <TouchableOpacity style={styles.iconContainer} onPress={alteral55}><Image style={styles.iconDimension} source={require("../../../icons/grade54x.png")}/></TouchableOpacity>
                            </View>
                            </View>
                            {renderCondL5()}
                             <Text style={styles.imputLabel}> Justifique: </Text>
                             <TextInput style= {styles.imputText}>Escreva aqui sua justificativa</TextInput>
                             <TouchableOpacity style={styles.secondaryButton} onPress={() => navigation.navigate ("Evidencia")} > 
                                 <Text style={styles.secondaryButtonText}>Adicionar evidência</Text>
                             </TouchableOpacity>
                             <View style={styles.divisor}></View>





                             
                         </View>
                         
                            <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate ("Organizacao")}>
                         <Text style={styles.primaryButtonText}>Próximo</Text>
                     </TouchableOpacity>
                 </View>
        </ScrollView>

       )
       }




//         <ScrollView>
//             <View style= {{backgroundColor: '#fff'}}> 
//                 <View style={styles.container}>
//                     <View>
//                         <Text style= {styles.h2}> Limpeza</Text>
//                     </View>
//                     <FlatList
//                     keyExtractor= {(item) => item.titulo}
//                     data={data}
//                     renderItem= {({ item }) => (
//                         <View>
//                             <Text style={styles.bodyText}> {item.titulo} {item.descricao} </Text>

//                             <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 24}}>
//                                 <TouchableOpacity style={styles.iconContainer} onPress={answer}><Image style={styles.iconDimension} source={iconOneSelected}/></TouchableOpacity>
//                                 <TouchableOpacity style={styles.iconContainer}><Image style={styles.iconDimension} source={require("../../../icons/grade24x.png")} /></TouchableOpacity>
//                                 <TouchableOpacity style={styles.iconContainer}><Image style={styles.iconDimension} source={require("../../../icons/grade34x.png")}/></TouchableOpacity>
//                                 <TouchableOpacity style={styles.iconContainer}><Image style={styles.iconDimension} source={require("../../../icons/grade44x.png")}/></TouchableOpacity>
//                                 <TouchableOpacity style={styles.iconContainer}><Image style={styles.iconDimension} source={require("../../../icons/grade54x.png")}/></TouchableOpacity>
//                             </View>
//                             {noteDescription ? noteOne() : null}
//                             <Text style={styles.imputLabel}> Justifique: </Text>
//                             <TextInput style= {styles.imputText}>Escreva aqui sua justificativa</TextInput>
//                             <TouchableOpacity style={styles.secondaryButton} onPress={() => navigation.navigate ("Evidencia")} > 
//                                 <Text style={styles.secondaryButtonText}>Adicionar evidência</Text>
//                             </TouchableOpacity>
//                             <View style={styles.divisor}></View>
//                         </View>
//                      )}
//                     />
//                     <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate ("Organizacao")}>
//                         <Text style={styles.primaryButtonText}>Próximo</Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         </ScrollView>
        


  