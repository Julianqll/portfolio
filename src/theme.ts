import { createTheme } from "@mantine/core";
import { generateColors } from '@mantine/colors-generator';

export const theme = createTheme({
    colors: {
        'julian-blue': generateColors('#062343'),
        'julian-second-blue':generateColors('#2C4C6C'),
        'julian-third-blue': generateColors('#D0E6FF')
      },
      primaryColor: 'julian-blue',
      autoContrast: true,
});