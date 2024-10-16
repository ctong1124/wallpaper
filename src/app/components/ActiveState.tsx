'use client'
import useWakeLock from "react-use-wake-lock";
import { CaretIcon } from './CaretIcon';

export const ActiveState = () => {
  const { request, release, isLocked, isSupported } = useWakeLock({
    onError(e, type) {
      console.error("Wake Lock Error: REQUEST: ", e, type);
    },
    onLock(lock) {
      console.info("Wake Lock Acquired: ", lock);
    },
    onRelease(lock) {
      console.info("Wake Lock Released: ", lock);
    },
  });
  const checked = isLocked;
  const clickHandler = isLocked ? release : request;
  const showOption = isSupported;
  
  return (
    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-400 text-sm text-gray-900">
      {showOption && (<div className="absolute left-0 top-0 m-4">
        <label className="inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" checked={checked} onChange={clickHandler}/>
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ml-4 max-w-64">Turn on to keep your screen awake (and keep this browser tab active)</span>
        </label>
      </div>)}
      <div className="absolute right-0 top-0 m-5">
        <p className="text-right">Refresh to see new art</p>
      </div>
      <div className="absolute left-0 right-0 bottom-0 text-center mx-auto my-4y">
        <p className="pb-2">Scroll to learn more</p>
        <CaretIcon className="w-6 h-6 mx-auto fill-gray-500 animate-bounce"/>
      </div>
    </div>
  );
}