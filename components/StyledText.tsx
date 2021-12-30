import * as React from 'react';

import { Text, TextProps } from './Themed';

export function TitleText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontSize: 36 }]} />;
}

export function MonoText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />;
}
