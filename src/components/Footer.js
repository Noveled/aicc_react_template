import React from 'react'
import { communityLinks, platformLinks, resourcesLinks } from '../constants/data'
import { Link } from 'react-router-dom'
import FooterContents from './FooterContents'

const Footer = () => {
  return (
    <footer className='mt-20 border-t py-10 border-neutral-700'>
        <div className="container grid lg:grid-cols-3 grid-cols-2 gap-x-4 gap-y-10">
            <FooterContents title="Resource" linkData={communityLinks} />
            <FooterContents title="Platform" linkData={platformLinks} />
            <FooterContents title="Community" linkData={resourcesLinks} />
            {/* <div>
                <h3 className='text-xl font-semibold mb-4'>Resources</h3>
                <ul>
                    {
                        resourcesLinks.map((item, idx) => (
                            <li key={idx}>
                                <Link to = {item.to}>{item.text}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div> */}
            {/* <div>
                <h3>Platform</h3>
                <ul>
                    {
                        platformLinks.map((item, idx) => (
                            <li key={idx}>
                                <Link to = {item.to}>{item.text}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div>
                <h3>Community</h3>
                <ul>
                    {
                        communityLinks.map((item, idx) => (
                            <li key={idx}>
                                <Link to = {item.to}>{item.text}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div> */}
        </div>
    </footer>
  )
}

export default Footer