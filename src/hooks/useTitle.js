import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title}-M0DD∆51R's Photography`;
    }, [title])
}

export default useTitle;