import { useVoice } from "@humeai/voice-react";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "./ui/button";
import { Music2, Phone } from "lucide-react";
import { toast } from "sonner";

export default function StartCall({ configId, accessToken }: { configId?: string, accessToken: string }) {
  const { status, connect } = useVoice();

  return (
    <AnimatePresence>
      {status.value !== "connected" ? (


        <motion.div
          className={"z-100 fixed inset-0 p-4 flex items-center justify-center"}
          initial="initial"
          animate="enter"
          exit="exit"
          variants={{
            initial: { opacity: 0 },
            enter: { opacity: 1 },
            exit: { opacity: 0 },
          }}
        >






     <div className="flex flex-col gap-8 items-center">
<motion.div className="items-center flex justify-center -z-50">
 <p className="w-150 text-center text-6xl font-normal bg-orange-400 rounded-4xl py-8"> MelloChat: Empathic Voice Chat</p>
</motion.div>
     <AnimatePresence>
            <motion.div
              variants={{
                initial: { scale: 0.5 },
                enter: { scale: 1 },
                exit: { scale: 0.5 },
              }}
            >
              <Button
                className={"z-100 flex p-8 hover:bg-blue-600 font-bold text-xl transition-all duration-900 ease-in-out cursor-pointer items-center gap-1.5 rounded-full"}
                onClick={() => {
                  connect({ 
                    auth: { type: "accessToken", value: accessToken },
                    configId, 
                  })
                    .then(() => {})
                    .catch(() => {
                      toast.error("Unable to start call");
                    })
                    .finally(() => {});
                }}
              >
                <span className="animate-bounce">
                  <Music2/>
                </span>
                <span>Talk to Mello</span>
              </Button>
            </motion.div>
          </AnimatePresence>
<p>
Making voice AI simple
and accessible.
</p>
     </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
