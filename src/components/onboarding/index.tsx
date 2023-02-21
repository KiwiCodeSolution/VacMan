import Dots from '../ui/dots';

export default function Onboarding() {
  return (
    <div className="my-4 mb-8">
      <h2 className="text-2xl mb-4">Onboarding</h2>
      <p className="mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio veniam laboriosam corrupti, voluptas provident
        officiis error magni libero consequuntur tempora facere beatae at harum eius quidem magnam commodi quas
        possimus.
      </p>
      <Dots amount={3} activeIndex={0} />
    </div>
  );
}
