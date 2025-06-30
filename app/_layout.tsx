/* sbc-app-redesign */
/* Overall Layout File [_layout.tsx] */

/*By Jonathan Bruce
JBruce, LLC
jbruce.design
.j.
- - - - - */

import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      {/*<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" options={{ headerShown: false }} />*/}
    </Stack>
  );
}; /* Think about how to best organize the tabs/screens for this app!!
Do I want the most important tabs at the bottom and everything else on a tab bar? */