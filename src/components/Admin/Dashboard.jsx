import Layout from "./Layout"
import Chart from 'react-apexcharts'

const Dashboard = ()=>{
    const sales = {
        options: {
          chart: {
            id: 'apexchart-example'
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
          }
        },
        series: [{
          name: 'series-1',
          data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
        }]
    }

    const profit = {
        series: [{
          name: 'Net Profit',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        }, {
          name: 'Revenue',
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        }, {
          name: 'Free Cash Flow',
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }],
        options: {
          chart: {
            type: 'bar',
            height: 350
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '55%',
              endingShape: 'rounded'
            },
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
          },
          xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
          },
          yaxis: {
            title: {
              text: '$ (thousands)'
            }
          },
          fill: {
            opacity: 1
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return "$ " + val + " thousands"
              }
            }
          }
        },
    }

    return (
        <Layout>
            <div className="grid md:grid-cols-4 gap-6">

                <div className="bg-orange-600 text-white rounded-lg shadow-lg py-8 px-4 border flex gap-4 items-center">
                    <div className="space-y-2">
                        <div className="flex justify-center items-center bg-orange-400 w-[64px] h-[64px] border border-white border-2 rounded-full shadow">
                            <i className="ri-shopping-cart-line text-3xl text-white"></i>
                        </div>
                        <h1 className="text-xl font-semibold">Products</h1>
                    </div>
                    <div className="border-r border-white h-full "></div>
                    <h1 className="text-4xl font-bold">
                        {(1245).toLocaleString()}
                    </h1>
                </div>

                <div className="bg-green-700 text-white rounded-lg shadow-lg py-8 px-4 border flex gap-4 items-center">
                    <div className="space-y-2">
                        <div className="flex justify-center items-center bg-green-500 w-[64px] h-[64px] border border-white border-2 rounded-full shadow">
                            <i className="ri-shopping-basket-2-line text-3xl text-white"></i>
                        </div>
                        <h1 className="text-xl font-semibold">Orders</h1>
                    </div>
                    <div className="border-r border-white h-full "></div>
                    <h1 className="text-4xl font-bold">
                        {(87445).toLocaleString()}
                    </h1>
                </div>

                <div className="bg-indigo-600 text-white rounded-lg shadow-lg py-8 px-4 border flex gap-4 items-center">
                    <div className="space-y-2">
                        <div className="flex justify-center items-center bg-indigo-400 w-[64px] h-[64px] border border-white border-2 rounded-full shadow">
                            <i className="ri-money-dollar-circle-line text-3xl text-white"></i>
                        </div>
                        <h1 className="text-xl font-semibold">Payments</h1>
                    </div>
                    <div className="border-r border-white h-full "></div>
                    <h1 className="text-4xl font-bold">
                        {(87445).toLocaleString()}
                    </h1>
                </div>

                <div className="bg-rose-600 text-white rounded-lg shadow-lg py-8 px-4 border flex gap-4 items-center">
                    <div className="space-y-2">
                        <div className="flex justify-center items-center bg-rose-400 w-[64px] h-[64px] border border-white border-2 rounded-full shadow">
                            <i className="ri-user-line text-3xl text-white"></i>
                        </div>
                        <h1 className="text-xl font-semibold">Customers</h1>
                    </div>
                    <div className="border-r border-white h-full "></div>
                    <h1 className="text-4xl font-bold">
                        {(745).toLocaleString()}
                    </h1>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-8 md:col-span-2">
                    <h1 className="text-xl font-semibold">Sales</h1>
                    <Chart
                        options={sales.options}
                        series={sales.series}
                        height={250}
                        width={'100%'}
                    />
                </div>

                <div className="bg-white shadow-lg rounded-lg p-8 md:md:col-span-2">
                    <h1 className="text-xl font-semibold">Profit</h1>
                    <Chart 
                        options={profit.options}
                        series={profit.series}
                        height={250}
                        width={'100%'}
                        type="bar"
                    />
                </div>

                <div className="p-8 bg-purple-500 rounded-lg shadow-lg md:col-span-4 flex md:flex-row flex-col items-center gap-8">
                    <div className="bg-white rounded-full flex items-center">
                        <img src="/images/avt.webp" alt="" className="w-[180px] "/>
                    </div>
                    <div className="">
                        <h1 className="md:text-4xl md:text-left text-2xl font-bold text-white mb-2 text-center">Dashboard Report & Analytics</h1>
                        <p className="text-gray-200 md:text-left text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus rerum ut quos quam animi in quod vero corporis iusto cumque?</p>

                    </div>

                </div>
            </div>
        </Layout>
    )
}

export default Dashboard