import * as React from 'react';
import { Image } from 'react-native';
import { styles } from '../themes/dark';

type ImageSrc = {
    url: string;    
};

const Logo = (props: ImageSrc) => {
    return(
        <Image source={{ uri: props.url}} style={styles.logo}/>
    );
};

export default Logo;