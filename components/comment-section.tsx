"use client"

import { useState } from "react"
import Image from "next/image"
import { ThumbsUp, ThumbsDown, MoreVertical, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { useToast } from "@/components/ui/use-toast"

interface CommentProps {
  comment: any
}

function Comment({ comment }: CommentProps) {
  const [liked, setLiked] = useState(false)
  const [disliked, setDisliked] = useState(false)
  const [likeCount, setLikeCount] = useState(comment.likes)
  const [showReplies, setShowReplies] = useState(false)
  const { toast } = useToast()

  const handleLike = () => {
    if (liked) {
      setLiked(false)
      setLikeCount(likeCount - 1)
    } else {
      setLiked(true)
      setLikeCount(likeCount + 1)
      if (disliked) {
        setDisliked(false)
      }
    }
  }

  const handleDislike = () => {
    if (disliked) {
      setDisliked(false)
    } else {
      setDisliked(true)
      if (liked) {
        setLiked(false)
        setLikeCount(likeCount - 1)
      }
    }
  }

  const handleReply = () => {
    toast({
      title: "Reply submitted",
      description: "Your reply has been added to the comment.",
      duration: 3000,
    })
  }

  return (
    <div className="group mt-4 flex gap-3">
      <Image
        src={comment.avatar || "/placeholder.svg"}
        alt={comment.user}
        width={40}
        height={40}
        className="h-10 w-10 rounded-full"
      />
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span className="font-medium">{comment.user}</span>
          <span className="text-xs text-muted-foreground">{comment.timestamp}</span>
        </div>
        <p className="mt-1 text-sm">{comment.text}</p>
        <div className="mt-1 flex items-center gap-2">
          <Button variant="ghost" size="icon" className={cn("h-8 w-8", liked && "text-primary")} onClick={handleLike}>
            <ThumbsUp className={cn("h-4 w-4", liked && "fill-current")} />
            <span className="sr-only">Like</span>
          </Button>
          <span className="text-xs text-muted-foreground">{likeCount}</span>
          <Button
            variant="ghost"
            size="icon"
            className={cn("h-8 w-8", disliked && "text-muted-foreground")}
            onClick={handleDislike}
          >
            <ThumbsDown className={cn("h-4 w-4", disliked && "fill-current")} />
            <span className="sr-only">Dislike</span>
          </Button>
          <Button variant="ghost" size="sm" className="h-8 text-xs" onClick={handleReply}>
            Reply
          </Button>
        </div>

        {comment.replies && comment.replies.length > 0 && (
          <>
            <Button
              variant="ghost"
              size="sm"
              className="mt-2 flex h-8 items-center gap-1 rounded-full text-xs font-medium text-blue-600"
              onClick={() => setShowReplies(!showReplies)}
            >
              {showReplies ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              {comment.replies.length} {comment.replies.length === 1 ? "reply" : "replies"}
            </Button>

            {showReplies && (
              <div className="mt-2 space-y-4">
                {comment.replies.map((reply: any) => (
                  <div key={reply.id} className="flex gap-3">
                    <Image
                      src={reply.avatar || "/placeholder.svg"}
                      alt={reply.user}
                      width={24}
                      height={24}
                      className="h-6 w-6 rounded-full"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">{reply.user}</span>
                        <span className="text-xs text-muted-foreground">{reply.timestamp}</span>
                      </div>
                      <p className="mt-1 text-sm">{reply.text}</p>
                      <div className="mt-1 flex items-center gap-2">
                        <Button variant="ghost" size="icon" className="h-6 w-6">
                          <ThumbsUp className="h-3 w-3" />
                          <span className="sr-only">Like</span>
                        </Button>
                        <span className="text-xs text-muted-foreground">{reply.likes}</span>
                        <Button variant="ghost" size="icon" className="h-6 w-6">
                          <ThumbsDown className="h-3 w-3" />
                          <span className="sr-only">Dislike</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="h-6 text-xs">
                          Reply
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
      <Button variant="ghost" size="icon" className="h-8 w-8 opacity-0 transition-opacity group-hover:opacity-100">
        <MoreVertical className="h-4 w-4" />
        <span className="sr-only">More</span>
      </Button>
    </div>
  )
}

export default function CommentSection({ comments }: { comments: any[] }) {
  const [sortBy, setSortBy] = useState("top")
  const [commentText, setCommentText] = useState("")
  const { toast } = useToast()

  const handleAddComment = () => {
    if (commentText.trim()) {
      toast({
        title: "Comment added",
        description: "Your comment has been posted successfully.",
        duration: 3000,
      })
      setCommentText("")
    }
  }

  return (
    <div className="mt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">{comments.length} Comments</h2>
        <Button variant="ghost" size="sm" className="gap-2">
          <ChevronDown className="h-4 w-4" />
          <span>Sort by: {sortBy === "top" ? "Top comments" : "Newest first"}</span>
        </Button>
      </div>

      <div className="mt-4 flex gap-3">
        <Image
          src="/placeholder.svg?height=40&width=40"
          alt="Your avatar"
          width={40}
          height={40}
          className="h-10 w-10 rounded-full"
        />
        <div className="flex-1">
          <Textarea
            placeholder="Add a comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            className="min-h-[40px] resize-none"
          />
          <div className="mt-2 flex justify-end gap-2">
            <Button variant="ghost" size="sm" onClick={() => setCommentText("")}>
              Cancel
            </Button>
            <Button size="sm" disabled={!commentText.trim()} onClick={handleAddComment}>
              Comment
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-4">
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  )
}
