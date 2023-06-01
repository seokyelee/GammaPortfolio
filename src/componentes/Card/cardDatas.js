import Card from './Card';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Text_Image = {
    args: {
        text: 'Hola que tal',
        image: 'https://via.placeholder.com/150x150',
    },
  };

export const Emoji = {
    args: {
        text: '🔥',
        image: 'https://via.placeholder.com/150x150',
    },
  };

export const NO_TEXT = {
    args: {
        image: 'https://via.placeholder.com/150x150',
    },
  };