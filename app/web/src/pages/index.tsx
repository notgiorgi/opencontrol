import { createEffect, Match, Switch } from "solid-js";
import { useAccount } from "../components/context-account";
import { Navigate } from "@solidjs/router";
import { useOpenAuth } from "@openauthjs/solid"

export default function Index() {
  const auth = useOpenAuth()
  const account = useAccount()
  return (
    <Switch>
      <Match when={account.current}>
        <Navigate href={`/${account.current!.workspaces[0].id}`} />
      </Match>
      <Match when={!account.current}>
        <div>Landing page</div>
        <div onClick={() => auth.authorize()}>Login</div>
      </Match>
    </Switch>
  )
}
