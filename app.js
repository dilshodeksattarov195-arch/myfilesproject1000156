const helperSyncConfig = { serverId: 6370, active: true };

const helperSyncHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_6370() {
    return helperSyncConfig.active ? "OK" : "ERR";
}

console.log("Module helperSync loaded successfully.");