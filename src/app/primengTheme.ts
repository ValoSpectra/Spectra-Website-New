import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

export default definePreset(Aura, {
  primitive: {
    test: '#ffcc00',
  },
  semantic: {
    colorScheme: {
      light: {
        primary: {
          color: '{sky.400}',
          hoverColor: '{sky.500}',
          activeColor: '{sky.700}',
        },
        content: {
          borderColor: '{surface.500}',
        },
        formField: {
          borderColor: '{surface.400}',
        },
      },
      dark: {
        primary: {
          color: '{sky.400}',
          hoverColor: '{sky.500}',
          activeColor: '{sky.700}',
        },
        content: {
          borderColor: '{surface.400}',
        },
        formField: {
          borderColor: '{surface.500}',
        },
      },
    },
  },
  components: {
    button: {
      colorScheme: {
        light: {
          help: {
            background: '{purple.400}',
            hoverBackground: '{purple.500}',
            activeBackground: '{purple.600}',
            borderColor: '{purple.400}',
            hoverBorderColor: '{purple.500}',
            activeBorderColor: '{purple.600}',
          },
        },
        dark: {
          help: {
            background: '{purple.500}',
            hoverBackground: '{purple.400}',
            activeBackground: '{purple.300}',
            borderColor: '{purple.500}',
            hoverBorderColor: '{purple.400}',
            activeBorderColor: '{purple.300}',
          },
        },
      },
    },
  },
});
