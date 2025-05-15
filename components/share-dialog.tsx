"use client"

import { useState } from "react"
import { Copy, Facebook, Twitter, Linkedin, Mail } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"

interface ShareDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  videoTitle: string
}

export default function ShareDialog({ open, onOpenChange, videoTitle }: ShareDialogProps) {
  const [startTime, setStartTime] = useState(false)
  const [currentTime, setCurrentTime] = useState({ minutes: "0", seconds: "0" })
  const { toast } = useToast()

  const shareUrl = `https://youtube.com/watch?v=dQw4w9WgXcQ${
    startTime ? `&t=${Number.parseInt(currentTime.minutes) * 60 + Number.parseInt(currentTime.seconds)}` : ""
  }`

  const embedCode = `<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ${
    startTime ? `?start=${Number.parseInt(currentTime.minutes) * 60 + Number.parseInt(currentTime.seconds)}` : ""
  }" title="${videoTitle}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

  const handleCopy = (text: string, message: string) => {
    navigator.clipboard.writeText(text)
    toast({
      title: "Copied!",
      description: message,
      duration: 3000,
    })
  }

  const handleShare = (platform: string) => {
    toast({
      title: `Shared on ${platform}`,
      description: `The video has been shared on ${platform}.`,
      duration: 3000,
    })
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share</DialogTitle>
        </DialogHeader>
        <Tabs defaultValue="share">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="share">Share</TabsTrigger>
            <TabsTrigger value="embed">Embed</TabsTrigger>
          </TabsList>
          <TabsContent value="share" className="space-y-4">
            <div className="mt-4 grid grid-cols-4 gap-2">
              <Button
                variant="outline"
                className="flex flex-col items-center gap-1 p-3"
                onClick={() => handleShare("Facebook")}
              >
                <Facebook className="h-5 w-5 text-blue-600" />
                <span className="text-xs">Facebook</span>
              </Button>
              <Button
                variant="outline"
                className="flex flex-col items-center gap-1 p-3"
                onClick={() => handleShare("Twitter")}
              >
                <Twitter className="h-5 w-5 text-sky-500" />
                <span className="text-xs">Twitter</span>
              </Button>
              <Button
                variant="outline"
                className="flex flex-col items-center gap-1 p-3"
                onClick={() => handleShare("LinkedIn")}
              >
                <Linkedin className="h-5 w-5 text-blue-700" />
                <span className="text-xs">LinkedIn</span>
              </Button>
              <Button
                variant="outline"
                className="flex flex-col items-center gap-1 p-3"
                onClick={() => handleShare("Email")}
              >
                <Mail className="h-5 w-5 text-red-500" />
                <span className="text-xs">Email</span>
              </Button>
            </div>

            <div className="flex items-center space-x-2">
              <div className="grid flex-1 gap-2">
                <Label htmlFor="link" className="sr-only">
                  Link
                </Label>
                <Input id="link" value={shareUrl} readOnly className="h-9" />
              </div>
              <Button size="sm" className="px-3" onClick={() => handleCopy(shareUrl, "Link copied to clipboard")}>
                <span className="sr-only">Copy</span>
                <Copy className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="start-time" checked={startTime} onCheckedChange={(checked) => setStartTime(!!checked)} />
              <div className="grid gap-1.5">
                <Label htmlFor="start-time" className="text-sm font-medium">
                  Start at
                </Label>
              </div>
              {startTime && (
                <div className="flex items-center gap-1">
                  <Input
                    type="number"
                    min="0"
                    value={currentTime.minutes}
                    onChange={(e) => setCurrentTime({ ...currentTime, minutes: e.target.value })}
                    className="h-8 w-16"
                  />
                  <span>:</span>
                  <Input
                    type="number"
                    min="0"
                    max="59"
                    value={currentTime.seconds}
                    onChange={(e) => setCurrentTime({ ...currentTime, seconds: e.target.value })}
                    className="h-8 w-16"
                  />
                </div>
              )}
            </div>
          </TabsContent>
          <TabsContent value="embed" className="space-y-4">
            <div className="rounded-md bg-muted p-4">
              <pre className="text-xs">{embedCode}</pre>
            </div>
            <div className="flex justify-end">
              <Button size="sm" onClick={() => handleCopy(embedCode, "Embed code copied to clipboard")}>
                <Copy className="mr-2 h-4 w-4" />
                Copy
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
