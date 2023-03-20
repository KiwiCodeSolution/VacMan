import * as Icons from 'components/iconsComponents';
import Button from 'components/ui/button';

import Stars from 'components/ui/stars';

const FullNote = () => {
  return (
    <div className="container mx-auto px-4">
      <p>FullNote</p>
      <div className="flex">
        <button className="flex-none">back</button>
        <span className="grow text-center">title</span>
        <button className="flex-none">change</button>
      </div>
      <ul>
        <li className="flex justify-between">
          <div>
            <p>Company Name</p>
            <Stars amount={5} active={3} />
          </div>
          <div>
            <p>Salary</p>
            <p>Salary$</p>
          </div>
        </li>
        <li className="flex gap-x-2 gap-y-1">
          <Icons.Stage />
          <p>Stage</p>
        </li>
        <li>Stage - value from state</li>
        <li className="flex gap-x-2 gap-y-1">
          <Icons.Action />
          <p>Action</p>
        </li>
        <li>Action - value from state</li>
        <li>link 1 - Company Link:</li>
        <li>link 2 - Sourse:</li>
        <li>
          <div className="flex gap-x-2 gap-y-1">
            <Icons.Notebook large />
            <p>Notebook</p>
          </div>
          {/* <form>
            <label>
              <textarea name="notebook" rows="5" placeholder="Type your note here..." />
            </label>
          </form> */}
        </li>
        <li>Maximum 25000 characters</li>
      </ul>
      <Button variant="black">Archive</Button>
    </div>
  );
};

export default FullNote;
