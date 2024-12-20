import Card from "@/components/card";
import Link from "next/link";

export default function notificationpage (){
    return <Card><h1>This is notification Page.</h1>
    <Link href="/complex-dashboard/archived">Archived</Link>
    </Card>
}