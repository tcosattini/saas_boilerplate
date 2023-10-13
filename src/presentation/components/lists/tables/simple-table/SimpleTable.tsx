import MediumButton from "../../../buttons/normal-button/primary/MediumButton";
import { dummyDataClient } from "./dummy-data/dummy-data";
import SimpleTableElement from "./elements/SimpleTableElement";
import SimpleTableHeader from "./elements/SimpleTableHeader";
import { ISimpleTableElement } from "./interface/simpleTable.interface";

export default function SimpleTable() {
  return (
    <div className="">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Users</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title,
            email and role.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <MediumButton title="Add user" />
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <SimpleTableHeader />
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {dummyDataClient.map((person: ISimpleTableElement) => (
                    <SimpleTableElement data={person} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
