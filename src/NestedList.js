import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import React, { useState } from 'react'
import uuid from 'react-uuid';

const Test = ({ data }) => {
    const { t } = useTranslation("common");
    const [open, setOpen] = useState(false);
    return (
        <li key={uuid()} style={{ borderBottom: " 1px solid #ccc9c9" }} >
            <p className='nested fs-16' onClick={() => setOpen((prev) => !prev)}>{t(data.title)}</p>
            {
                open && <ul style={{ backgroundColor: "#f2f0f0", boxShadow: "0px 10px 10px #d3cdcd" }}>
                    {data.nesteds.map((nested2) => {
                        return (
                            <li key={uuid()} style={{ borderBottom: " 1px solid #ccc9c9" }}>
                                <Link href={`/${nested2.link}`} >
                                    <a>
                                        <p className='nested-list fs-16'>{t(nested2.title)}</p>
                                    </a>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            }
        </li >
    )
}

export default Test