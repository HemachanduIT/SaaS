import '../src/styles/globals.css';
import React from 'react'


export const metadata = {
title: 'SaaS Task App',
description: 'A Trello+Notion hybrid demo'
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body>
<div className="min-h-screen">
<header className="bg-white shadow">
<div className="container mx-auto p-4">SaaS Task App</div>
</header>
<main className="container mx-auto p-4">{children}</main>
</div>
</body>
</html>
)
}