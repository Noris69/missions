export default async function instr_twitter(type: string, action: string) {
    try {
      console.log("start")
      await fetch(`/api/twitter/${type}/${action}`, {
        method: "POST"
      })
    } catch(e) {
      console.error(e)
    }
}