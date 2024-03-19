import { createTheme } from "@mantine/core";
import { generateColors } from '@mantine/colors-generator';

export const theme = createTheme({
    colors: {
        'julian-blue': generateColors('#11284b'),
      },
      primaryColor: 'julian-blue',
      autoContrast: true,
});