import styles from "../../../styles/dashboard/myPlansTableInfo.module.scss"
import Iphone from "../../../public/images/icons/iphone.png"
import Image from "next/image"

const MyPlansTableInfo = () => {
    return (
        <div className={` w-full flex flex-row justify-start items-start pr-6 pl-6 ${styles['my-plans-table-info']}`}>
            <div id="investmentDetails" className={"p-6 flex flex-col justify-center items-center"}>
                <div className={"w-full mb-7 h-auto"}>
                    <h3>Investment details</h3>
                </div>
                <div className={"w-full h-auto flex justify-between mb-6"}>
                    <span>Investment Amount</span>
                    <span>10,000 (LVL)</span>
                </div>
                <div className={"w-full h-auto flex justify-between mb-6"}>
                    <span>Investment Period</span>
                    <span>6 Month</span>
                </div>
                <div className={"w-full flex justify-between mb-6"}>
                    <span>Profitable Investment</span>
                    <span>150,000 (LVL)</span>
                </div>
                <div className={"w-full flex justify-between mb-12"}>
                    <span>Investment Objective</span>
                    <span>Ifone 14</span>
                </div>
                <div className={"w-full flex justify-end mb-3"}>
                    <span className={"mr-2"}>180 days until Iphone 14</span>
                    <Image src={Iphone} alt={"IPHONE"} />
                </div>
                <div className={"w-full"}>
                    <div className={"w-4/6 h-2"}></div>
                </div>
            </div>
            <div id="dataGeneral" className={"pt-6 pl-6 pb-6 ml-4 flex flex-col justify-center items-center"}>
                <div className={"w-full mb-4"}>
                    <h3>Data General</h3>
                </div>
                <div className={"w-full flex flex-col justify-start overflow-y-auto"}>
                    <div className={"w-full flex flex-col justify-start mb-6"}>
                        <span className={"mb-0.5"}>Expiration</span>
                        <span>25/10/2022</span>
                    </div>
                    <div className={"w-full flex flex-col justify-start mb-6"}>
                        <span className={"mb-0.5"}>TVL</span>
                        <span>900,000,000</span>
                    </div>
                    <div className={"w-full flex flex-col justify-start mb-6"}>
                        <span className={"mb-0.5"}>Lock Time</span>
                        <span>6 month</span>
                    </div>
                    <div className={"w-full flex flex-col justify-start mb-6"}>
                        <span className={"mb-0.5"}>APY</span>
                        <span>20%</span>
                    </div>
                    <div className={"w-full flex flex-col justify-start mb-6"}>
                        <span className={"mb-0.5"}>Total Wallet</span>
                        <span>900,000,00</span>
                    </div>
                    <div className={"w-full flex flex-col justify-start mb-6"}>
                        <span className={"mb-0.5"}>Current value token</span>
                        <span>852,596,000</span>
                    </div>
                    <div className={"w-full flex flex-col justify-start mb-6"}>
                        <span className={"mb-0.5"}>setelment Period</span>
                        <span>35 Day</span>
                    </div>
                    <div className={"w-full flex flex-col justify-start mb-6"}>
                        <span className={"mb-0.5"}>Lockup Day</span>
                        <span>95 Day</span>
                    </div>
                    <div className={"w-full flex flex-col justify-start mb-6"}>
                        <span className={"mb-0.5"}>Average Token Staked</span>
                        <span>520,000,000</span>
                    </div>
                </div>
            </div>
            <div id="dreamGoal" className={"p-6 ml-4 flex flex-col justify-center items-center"}>
                3
            </div>
        </div>
    )
}

export default MyPlansTableInfo;