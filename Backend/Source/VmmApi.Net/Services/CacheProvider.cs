using System;
using System.Runtime.Caching;

namespace VmmApi.Net.Services
{
    public interface ICacheProvider<K, T>
    {
        bool Add(K key, T value, DateTimeOffset expiration);
        void Remove(K key);
        T Get(K key);
    }

    public class FileCacheProvder : ICacheProvider<string, byte[]>
    {
        public bool Add(string key, byte[] value, DateTimeOffset expiration)
        {
            MemoryCache memoryCache = MemoryCache.Default;
            Remove(key);
            return memoryCache.Add(key, value, expiration);
        }

        public byte[] Get(string key)
        {
            MemoryCache memoryCache = MemoryCache.Default;
            return (byte[])memoryCache.Get(key);
        }

        public void Remove(string key)
        {
            MemoryCache memoryCache = MemoryCache.Default;
            if (memoryCache.Contains(key))
            {
                memoryCache.Remove(key);
            }
        }
    }
}