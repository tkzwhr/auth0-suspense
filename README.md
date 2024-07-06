![react-auth0-suspense](https://placehold.jp/3063a6/ffffff/500x80.png?text=react-auth0-suspense)

React Suspenseに対応したAuth0ユーティリティです。

# Requirement

- React v18

# Installation

```bash
npm i git+https://github.com/tkzwhr/react-auth0-suspense
```

# Usage

React Hooksで提供しています。

`useSuspenseAuth0` にAuth0クライアント情報を渡すことで利用できます。

```tsx
function MyComponent() {
    const auth0 = useSuspenseAuth0({
        domain: "your auth0 domain",
        clientId: "your auth0 client id",
        redirectUri: "your auth0 redirect uri",
        audience: "your auth0 audience",
        scope: "your auth0 scope",
    });
    const [token, setToken] = useState("");
    
    // 認証状態の取得
    if (!auth0.isAuthenticated) {
        return <div>Unauthorized</div>;
    }
    
    // ユーザー情報の取得
    if (auth0.user) {
        console.log(auth0.user.email);
    }
    
    // Auth0 Clientの利用
    useEffect(() => {
        auth0.client.getTokenSilently()
            .then((t) => {
                setToken(t);
            });
    }, []);
    
    return <div>Your token: {token}</div>;
}

function MyRootComponent() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <MyComponent />
        </Suspense>
    );
}
```

# Note

- なし

# License

- [MIT](https://en.wikipedia.org/wiki/MIT_License)
