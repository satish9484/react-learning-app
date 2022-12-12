import React from "react";
import "./App.css";

export default function ExtraLeraingFile() {
  return (
    <React.Fragment>
      <div className="mb-2">
        <div>
          1. we have to hight for making container in center of the page,
          ohterwise it's wan't work. 2. in order to manipulate flex child
          postion we can to use self-end or self-start 3. justify- : is used for
          making content horizontaly in position 4. items- : is used for making
          content vertically in position
        </div>
      </div>
      <div className="h-80 bg-gray-500 flex flex-col justify-center items-center">
        <div className="p-2 bg-violet-400"> Block 1 </div>
        <div className="p-2 bg-orange-400">Block 2</div>
        <div className="p-2 bg-blue-400 self-end"> Block 3 </div>
        <div className="p-2 bg-green-400 self-start"> Block 4 </div>
      </div>

      <div>
        If you use flex-wrap, then insted of items-star or items-end we have to
        use content-start or content for container children to behave properly
      </div>
      <div className="m-20 h-80 bg-gray-300  flex flex-wrap flex-row justify-center content-center">
        <div className="p-2 mt-3 bg-violet-400">
          Block 1 Take a look at a hands-on example of the process.
        </div>
        <div className="p-2 mt-3 bg-orange-400">
          Block 2 Take a look at a hands-on example of the process.
        </div>
        <div className="p-2 mt-3 bg-blue-400">
          {" "}
          Block 3 Take a look at a hands-on example of the process.
        </div>
        <div className="p-2 mt-3 bg-green-400">
          {" "}
          Block 4Take a look at a hands-on example of the process.
        </div>{" "}
      </div>

      <div>Flex grow and shrink, space</div>

      <div className="mt-4  flex flex-row space-x-2 ">
        <div className="p-2 bg-violet-400">
          Block 1 Take a look at a hands-on example of the process.{" "}
        </div>
        <div className="p-2 bg-orange-400 flex-grow flex-shrink">
          Block 2 Take a look at a hands-on example of the process. Take a look
          at a hands-on example of the process.
        </div>
        <div className="p-2 bg-blue-400 flex-grow"> Block 3 </div>
        <div className="p-2 bg-green-400 "> Block 4 </div>
      </div>
    </React.Fragment>
  );
}
