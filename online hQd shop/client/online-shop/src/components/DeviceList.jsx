import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../main";
import DeviceItem from "./DeviceItem";


const DeviceList = observer(() => {
    const {device} = useContext(Context)
    return (

        <div className="flex flex-wrap justify-center -mx-4 mb-24" style={{position:'relative', width: '927px', height: '795px' }}>
            {device.devices.map(device => (
            <div className="px-4 mb-8">
                <DeviceItem key={device.id} device={device} />
            </div>
            ))}
        </div>
      );
});

export default DeviceList;