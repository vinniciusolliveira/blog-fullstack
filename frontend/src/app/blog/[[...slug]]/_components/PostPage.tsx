


interface PostPageProps {
    PostTitle?: string
    PostDescription?: string
    PostCategory?: string
    PostSubcategory?: string
    PostLocal?: string
    PostContent?: string
    PostDate?: string
    PostImgSrc?: string
    postId: string
}


const PostPage: React.FC<PostPageProps> = ({ PostTitle, PostCategory, PostSubcategory, PostContent, PostDate, PostDescription,PostImgSrc, PostLocal }) => {
    return <>
    <section className="min-h-screen h-screen min-w-screen bg-background text-foreground">
        <div className="h-full">
            <div className="h-16 w-full flex justify-center items-center">
                <h6 className="font-bold text-2xl">Post Name</h6>
            </div>
            <div className="h-full flex justify-center">
                <div className="h-full w-[70%]"></div>
            </div>
        </div>
    </section>
    </>
}

export default PostPage;