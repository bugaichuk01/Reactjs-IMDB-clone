const monthNames = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
    "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
];

export const getCurrentMonth = () => {
    const currentDate = new Date();
    return monthNames[currentDate.getMonth()];
}