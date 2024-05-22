import Image from 'next/image';
import CNSLogo from 'public/images/CNS_Logo.png';

const navItems = [
    {
        mainText: 'CASSA', items: [
            { href: './CASSA_Arts_Workshop.html', linkText: 'CASSA Arts Workshop' },
            { href: './CASSA_Music.html', linkText: 'CASSA Music' },
            { href: './CASSA_2022-23.html', linkText: 'CASSA 2022-23' },
            { href: './CASSA_2021-22.html', linkText: 'CASSA 2021-22' },
            { href: './CASSA_2020-21.html', linkText: 'CASSA 2020-21' },
            { href: './CASSA_2019-20.html', linkText: 'CASSA 2019-20' },
            { href: './CASSA_2018-19.html', linkText: 'CASSA 2018-19' },
            { href: './CASSA_2017-18.html', linkText: 'CASSA 2017-18' },
            { href: './CASSA_2016-17.html', linkText: 'CASSA 2016-17' },
            { href: './CASSA_2015-16.html', linkText: 'CASSA 2015-16' },
            { href: './CASSA_2011-12.html', linkText: 'CASSA 2011-12' },
            { href: './CASSA_2009-2015/CASSA_2009-2015.html', linkText: 'CASSA 2009-2015' },
            { href: './CASSA_1989-2012/CASSA_1989-2012.html', linkText: 'CASSA 1989-2012' },
            { href: './CASSA_Silkscreen.html', linkText: 'CASSA Silkscreen' },
            { href: './CASSA_1991_WRC_News.html', linkText: 'CASSA  1991 WRC News' }
        ]
    },
    {
        mainText: 'About Us', items: [
            { href: './About_Clean_%26_Sober_Streets.html', linkText: 'About Clean & Sober Streets' },
            { href: './How_It_Works.html', linkText: 'How It Works' },
            { href: './Program_History.html', linkText: 'Program History' },
            { href: './In_Memorium.html', linkText: 'In Memorium' }
        ]
    },
    { href: './Referrals.html', mainText: 'Referrals' },
    { href: './AA_NA_Meetings.html', mainText: 'AA/NA Meetings' },
    { href: './CBS_Eye_on_America.html', mainText: 'CBS Eye on America' },
    { href: './Donate_Now.html', mainText: 'Donate Now' },
    { href: './Contact_Clean_%26_Sober.html', mainText: 'Contact Clean & Sober' },
    { href: './Contributions.html', mainText: 'Contributions' }
];

export function Header() {
    return (
        <nav>
            <ul class="main-menu">
                <li><a href="/">
                    <Image src={CNSLogo} alt="CNS logo" width={30} height={30} />
                </a></li>
                {navItems.map((item, index) => (
                    <li>
                        <a href={item.href}>{item.mainText}</a>
                        {item.items && (
                            <ul class="dropdown">
                                {item.items.map((item, index) => (
                                    <li><a href={item.href}>{item.linkText}</a></li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
}
