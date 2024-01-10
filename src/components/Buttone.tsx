import * as React from 'react';
import { Button } from 'react-native';
import { styles } from '../themes/dark';


type ButtonStuff = {
    label: string;
}

const TemplateButton = (props: ButtonStuff) => {
    return(
    <Button title={props.label}/>
    );
};

export default TemplateButton;