import { useState } from 'react';

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('general');

  return (
    <div className="py-6">
      <h1 className="text-2xl font-semibold text-gray-900">u7cfbu7edfu8bbeu7f6e</h1>

      <div className="mt-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            <button
              onClick={() => setActiveTab('general')}
              className={`${activeTab === 'general' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              u57fau672cu8bbeu7f6e
            </button>
            <button
              onClick={() => setActiveTab('security')}
              className={`${activeTab === 'security' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              u5b89u5168u8bbeu7f6e
            </button>
            <button
              onClick={() => setActiveTab('authentication')}
              className={`${activeTab === 'authentication' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              u8ba4u8bc1u8bbeu7f6e
            </button>
            <button
              onClick={() => setActiveTab('appearance')}
              className={`${activeTab === 'appearance' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              u5916u89c2u8bbeu7f6e
            </button>
          </nav>
        </div>

        <div className="mt-6">
          {activeTab === 'general' && (
            <div>
              <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                  <div className="md:col-span-1">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">u57fau672cu4fe1u606f</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      u8fd9u4e9bu4fe1u606fu5c06u663eu793au5728u60a8u7684u516cu5f00u8d44u6599u4e2d
                    </p>
                  </div>
                  <div className="mt-5 md:mt-0 md:col-span-2">
                    <form className="space-y-6">
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-4">
                          <label htmlFor="company-name" className="block text-sm font-medium text-gray-700">
                            u516cu53f8u540du79f0
                          </label>
                          <input
                            type="text"
                            name="company-name"
                            id="company-name"
                            defaultValue="u793au4f8bu516cu53f8"
                            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-4">
                          <label htmlFor="site-url" className="block text-sm font-medium text-gray-700">
                            u7f51u7ad9URL
                          </label>
                          <input
                            type="text"
                            name="site-url"
                            id="site-url"
                            defaultValue="https://example.com"
                            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                          u516cu53f8u7b80u4ecb
                        </label>
                        <div className="mt-1">
                          <textarea
                            id="about"
                            name="about"
                            rows={3}
                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                            defaultValue=""
                          />
                        </div>
                        <p className="mt-2 text-sm text-gray-500">
                          u7b80u77edu4ecbu7ec8u60a8u7684u516cu53f8
                        </p>
                      </div>

                      <div className="flex justify-end">
                        <button
                          type="submit"
                          className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          u4fddu5b58
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div>
              <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                  <div className="md:col-span-1">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">u5bc6u7801u7b56u7565</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      u8bbeu7f6eu5bc6u7801u5f3au5ea6u548cu8fc7u671fu7b56u7565
                    </p>
                  </div>
                  <div className="mt-5 md:mt-0 md:col-span-2">
                    <form className="space-y-6">
                      <div>
                        <label className="text-base font-medium text-gray-900">u5bc6u7801u5f3au5ea6u8981u6c42</label>
                        <p className="text-sm leading-5 text-gray-500">u9009u62e9u5bc6u7801u5fc5u987bu5b8cu6210u7684u8981u6c42</p>
                        <fieldset className="mt-4">
                          <legend className="sr-only">u5bc6u7801u7b56u7565</legend>
                          <div className="space-y-4">
                            <div className="flex items-start">
                              <div className="flex items-center h-5">
                                <input
                                  id="min-length"
                                  name="min-length"
                                  type="checkbox"
                                  defaultChecked
                                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label htmlFor="min-length" className="font-medium text-gray-700">
                                  u81f3u5c118u4e2au5b57u7b26
                                </label>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <div className="flex items-center h-5">
                                <input
                                  id="uppercase"
                                  name="uppercase"
                                  type="checkbox"
                                  defaultChecked
                                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label htmlFor="uppercase" className="font-medium text-gray-700">
                                  u81f3u5c11u5305u542bu4e00u4e2au5927u5199u5b57u6bcd
                                </label>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <div className="flex items-center h-5">
                                <input
                                  id="lowercase"
                                  name="lowercase"
                                  type="checkbox"
                                  defaultChecked
                                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label htmlFor="lowercase" className="font-medium text-gray-700">
                                  u81f3u5c11u5305u542bu4e00u4e2au5c0fu5199u5b57u6bcd
                                </label>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <div className="flex items-center h-5">
                                <input
                                  id="numbers"
                                  name="numbers"
                                  type="checkbox"
                                  defaultChecked
                                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label htmlFor="numbers" className="font-medium text-gray-700">
                                  u81f3u5c11u5305u542bu4e00u4e2au6570u5b57
                                </label>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <div className="flex items-center h-5">
                                <input
                                  id="special-char"
                                  name="special-char"
                                  type="checkbox"
                                  defaultChecked
                                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label htmlFor="special-char" className="font-medium text-gray-700">
                                  u81f3u5c11u5305u542bu4e00u4e2au7279u6b8au5b57u7b26
                                </label>
                              </div>
                            </div>
                          </div>
                        </fieldset>
                      </div>

                      <div>
                        <label htmlFor="password-expiry" className="block text-sm font-medium text-gray-700">
                          u5bc6u7801u8fc7u671fu5929u6570
                        </label>
                        <select
                          id="password-expiry"
                          name="password-expiry"
                          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                          defaultValue="90"
                        >
                          <option value="30">30u5929</option>
                          <option value="60">60u5929</option>
                          <option value="90">90u5929</option>
                          <option value="180">180u5929</option>
                          <option value="never">u4eeu4e0du8fc7u671f</option>
                        </select>
                      </div>

                      <div className="flex justify-end">
                        <button
                          type="submit"
                          className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          u4fddu5b58
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'authentication' && (
            <div>
              <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                  <div className="md:col-span-1">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">u591au56e0u7d20u8ba4u8bc1</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      u6dfbu52a0u989du5916u7684u5b89u5168u5c42
                    </p>
                  </div>
                  <div className="mt-5 md:mt-0 md:col-span-2">
                    <form className="space-y-6">
                      <div className="space-y-6">
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="enable-mfa"
                              name="enable-mfa"
                              type="checkbox"
                              defaultChecked
                              className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="enable-mfa" className="font-medium text-gray-700">
                              u5f3au5236u5f00u542fu591au56e0u7d20u8ba4u8bc1
                            </label>
                            <p className="text-gray-500">u6240u6709u7528u6237u5fc5u987bu8bbeu7f6eu5e76u4f7fu7528u591au56e0u7d20u8ba4u8bc1</p>
                          </div>
                        </div>

                        <div>
                          <label className="text-sm font-medium text-gray-700">u652fu6301u7684MFAu65b9u5f0f</label>
                          <fieldset className="mt-4">
                            <legend className="sr-only">MFAu65b9u5f0f</legend>
                            <div className="space-y-4">
                              <div className="flex items-start">
                                <div className="flex items-center h-5">
                                  <input
                                    id="totp"
                                    name="mfa-method"
                                    type="checkbox"
                                    defaultChecked
                                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                                  />
                                </div>
                                <div className="ml-3 text-sm">
                                  <label htmlFor="totp" className="font-medium text-gray-700">
                                    u65f6u95f4u57fau4e8eu4e00u6b21u6027u5bc6u7801(TOTP)
                                  </label>
                                  <p className="text-gray-500">u4f7fu7528Authenticatoru7c7bu5e94u7528u751fu6210u9a8cu8bc1u7801</p>
                                </div>
                              </div>
                              <div className="flex items-start">
                                <div className="flex items-center h-5">
                                  <input
                                    id="sms"
                                    name="mfa-method"
                                    type="checkbox"
                                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                                  />
                                </div>
                                <div className="ml-3 text-sm">
                                  <label htmlFor="sms" className="font-medium text-gray-700">
                                    SMSu9a8cu8bc1u7801
                                  </label>
                                  <p className="text-gray-500">u901au8fc7u77edu4fe1u53d1u9001u9a8cu8bc1u7801</p>
                                </div>
                              </div>
                              <div className="flex items-start">
                                <div className="flex items-center h-5">
                                  <input
                                    id="email"
                                    name="mfa-method"
                                    type="checkbox"
                                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                                  />
                                </div>
                                <div className="ml-3 text-sm">
                                  <label htmlFor="email" className="font-medium text-gray-700">
                                    u90aeu4ef6u9a8cu8bc1u7801
                                  </label>
                                  <p className="text-gray-500">u901au8fc7u90aeu4ef6u53d1u9001u9a8cu8bc1u7801</p>
                                </div>
                              </div>
                              <div className="flex items-start">
                                <div className="flex items-center h-5">
                                  <input
                                    id="webauthn"
                                    name="mfa-method"
                                    type="checkbox"
                                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                                  />
                                </div>
                                <div className="ml-3 text-sm">
                                  <label htmlFor="webauthn" className="font-medium text-gray-700">
                                    WebAuthn/FIDO2u5b89u5168u5bc6u94a5
                                  </label>
                                  <p className="text-gray-500">u4f7fu7528u6307u7eb9u8bc6u522bu3001u9762u90e8u8bc6u522bu6216u5b89u5168u5bc6u94a5</p>
                                </div>
                              </div>
                            </div>
                          </fieldset>
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <button
                          type="submit"
                          className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          u4fddu5b58
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'appearance' && (
            <div>
              <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                  <div className="md:col-span-1">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">u5916u89c2u8bbeu7f6e</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      u81eau5b9au4e49u60a8u7684u767bu5f55u9875u9762u548cu95e8u6237
                    </p>
                  </div>
                  <div className="mt-5 md:mt-0 md:col-span-2">
                    <form className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">u516cu53f8u6807u5fd7</label>
                        <div className="mt-1 flex items-center">
                          <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                            <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                          </span>
                          <button
                            type="button"
                            className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                          >
                            u66f4u6539
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">u4e3bu9898u989cu8272</label>
                        <div className="mt-1">
                          <select
                            id="theme-color"
                            name="theme-color"
                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                            defaultValue="blue"
                          >
                            <option value="blue">u84ddu8272</option>
                            <option value="green">u7effu8272</option>
                            <option value="red">u7ea2u8272</option>
                            <option value="purple">u7d2bu8272</option>
                            <option value="orange">u6a59u8272</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">u81eau5b9au4e49CSS</label>
                        <div className="mt-1">
                          <textarea
                            id="custom-css"
                            name="custom-css"
                            rows={4}
                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                            defaultValue=""
                          />
                        </div>
                        <p className="mt-2 text-sm text-gray-500">
                          u8fd9u5c06u5e94u7528u4e8eu767bu5f55u9875u9762u548cu95e8u6237
                        </p>
                      </div>

                      <div className="flex justify-end">
                        <button
                          type="submit"
                          className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          u4fddu5b58
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
