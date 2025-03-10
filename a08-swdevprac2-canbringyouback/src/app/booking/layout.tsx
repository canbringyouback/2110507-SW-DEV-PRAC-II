import type { Metadata } from "next";
export default function BookingLayout({children}:{children:React.ReactNode}){

    return (
        <div>
            {children}
        </div>
    )
}

export const metadata: Metadata = {
    title: "Vaccine Booking",
  };
  