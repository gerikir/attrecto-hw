"use client";
import Link from "next/link";
import Image from "next/image";

const HeaderComponent = () => {
    return (
        <div className="flex h-14 items-center justify-between -mx-8 px-8 bg-white">
            <Link href="/">
                <Image src="/attrecto_logo.png" alt="logo" width={100} height={100} className="cursor-pointer" />
            </Link>
            <Link href="/admin">
                <button>Admin</button>
            </Link>
        </div>
    );
};

export default HeaderComponent;
