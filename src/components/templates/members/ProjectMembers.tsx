import Member from "./Member";
import Profile1 from '../../../assets/profile.png'
import Profile2 from '../../../assets/profile (1).png'
import Profile3 from '../../../assets/profile (2).png'
import Profile4 from '../../../assets/profile (3).png'
import Profile5 from '../../../assets/profile (4).png'
import Profile6 from '../../../assets/profile (5).png'
import Profile7 from '../../../assets/profile (6).png'
import Profile8 from '../../../assets/profile (7).png'

export default function ProjectMembers() {
    return (
        <div className="grid sm:grid-cols-2 gap-[20px]">
            <Member image={Profile1} name="Jaxson" job_description="General Manager" email="Jaxson@gmail.com" phone="+62 812-9875-1298"/>
            <Member image={Profile2} name="Harry Jones" job_description="Planning Manager" email="Harry.Jones@gmail.com" phone="+62 812-9875-1298"/>
            <Member image={Profile3} name="Jakob Siphron" job_description="Project Manager" email="Jakob.Siphron@gmail.com" phone="+62 812-9875-1298"/>
            <Member image={Profile4} name="Kianna Westervelt" job_description="Sales Manager" email="Kianna.West@gmail.com" phone="+62 812-9875-1298"/>
            <Member image={Profile5} name="Jakob Septimus" job_description="Operations Director" email="Jakob.Septimus@gmail.com" phone="+62 812-9875-1298"/>
            <Member image={Profile6} name="Roger Aminoff" job_description="Contractor" email="Roger Aminoff@gmail.com" phone="+62 812-9875-1298"/>
            <Member image={Profile7} name="Lindsey Vetrovs" job_description="Inspector" email="Lindsey.vetrovs@gmail.com" phone="+62 812-9875-1298"/>
            <Member image={Profile8} name="Ashlynn Westervelt" job_description="Store Manager" email="Ashlynn.West@gmail.com" phone="+62 812-9875-1298"/>

        </div>
    )
}
