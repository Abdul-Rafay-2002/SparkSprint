import prisma from "@/libs/prismadb"
import moment from "moment"


export default async function getGraphData() {
    try {
        //Get the Start dates and the ends dates for the 15 days including today.
        const startDate = moment().subtract(14, "days").startOf("day");
        const endDate = moment().endOf("day")

        //Query the database to get order data grouped by createdDate
        const result = await prisma?.order.groupBy({
            by: ["createdDate"],
            where: {
                createdDate: {
                    gte: startDate.toISOString(),
                    lte: endDate.toISOString()
                },
                status: 'complete',
            },
            _sum: {
                amount: true
            }
        });

        //initialize an object to aggregate the data by day
        const aggregratedData: {
            [day: string]: { day: string; date: string, totalAmount: number };

        } = {}

        //Create a clone of the start date to iterate over each day
        const currentDate = startDate.clone();

        //Iterate over each day in the date range
        while (currentDate <= endDate) {

            //Format the day as string (e.g Monday)
            const day = currentDate.format("dddd");
            
            //initialized the aggregated data for the day with the day, date and totalAmount
            aggregratedData[day] = {
                day,
                date: currentDate.format("YYYY-MM-DD"),
                totalAmount: 0,
            }

            //move to the next day
            currentDate.add(1, 'day')
        }

        //Calculate the total amount of each day by summming the order amounts
        result.forEach((entry) => {
            const day = moment(entry.createdDate).format("dddd");
            const amount = entry._sum.amount || 0;
            aggregratedData[day].totalAmount += amount
        });

        //Calculate the aggregatedData object to an array and sort it by date
        const formattedData = Object.values(aggregratedData).sort((a, b) =>
            moment(a.date).diff(moment(b.date)))

        // Return formattedData()
        return formattedData;
    } catch (error: any) {
        throw new Error(error);

    }
}