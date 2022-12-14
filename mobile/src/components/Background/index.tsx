import { ImageBackground } from 'react-native';

import backfroundImg from '../../assets/background-galaxy.png'

import { styles } from './styles';

interface Props {
  children: React.ReactNode;
}

export function Background( { children }: Props) {
  return (
    <ImageBackground
      source={backfroundImg}
      defaultSource={backfroundImg}
      style={styles.container}>
      {children}
    </ImageBackground>
  );
}