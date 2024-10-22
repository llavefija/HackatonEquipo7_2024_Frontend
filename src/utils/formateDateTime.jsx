export const formatDateTime = (dateTime) => {
    const [date, time] = dateTime.split("T");
    const hour = parseInt(time.split(":")[0], 10);
    return { date, hour };
};