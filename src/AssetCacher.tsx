import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ASSET_URLS } from "./assetURLs";
import { nonNullable } from "./nonNullable";
import { darken } from "polished";

const CACHE_NAME = "assets-cache-v1";

export const AssetCacher: React.FC = () => {
  const [busy, setBusy] = useState<boolean>(true);
  const [cachedFiles, setCachedFiles] = useState<number>(0);

  useEffect(() => {
    async function cacheAssets() {
      if ("serviceWorker" in navigator) {
        try {
          const cache = await caches.open(CACHE_NAME);

          if (cache) {
            // cache assets
            const successURLs = await Promise.all(
              ASSET_URLS.map(async (url) => {
                try {
                  const cached = await cache.match(url);

                  if (!cached) {
                    await cache.add(url);
                  }

                  return url;
                } catch (error) {
                  console.error(error);
                }

                return null;
              })
            );

            // // remove deprecated assets
            // const requestInCache = await cache.keys();
            // const urlsInCache = requestInCache.map((r) => r.url);

            // console.log("urlsInCache:", urlsInCache);

            // const deprecatedURLs = urlsInCache.filter(
            //   (url) => !ASSET_URLS.includes(url)
            // );

            // try {
            //   await Promise.all(
            //     deprecatedURLs.map(async (url) => cache.delete(url))
            //   );

            //   console.log("deleted:", deprecatedURLs);
            // } catch (error) {
            //   console.error(error);
            // }

            setCachedFiles(successURLs.filter(nonNullable).length);
          }
        } catch (error) {
          console.error(error);
        }

        setBusy(false);
      }
    }

    cacheAssets();
  }, []);

  return (
    <Container>
      {busy && <p>Caching files...</p>}
      {!busy && <p>Cached {cachedFiles} files</p>}
    </Container>
  );
};

const Container = styled.div`
  padding: 1em;
  border: 1px solid ${darken(0.1, "#eaf8fc")};
  border-radius: 0.25em;
  background: #eaf8fc;
  margin-bottom: 1em;
`;
