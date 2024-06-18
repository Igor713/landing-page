import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
    Eum, voluptatibus quo similique maxime sed sequi ab impedit nam, 
    quidem unde atque obcaecati maiores dolorem vero fugit perferendis quaerat repellendus rem?,`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
