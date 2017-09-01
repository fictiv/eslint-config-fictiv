# Exceptions to the rules
> because what is life without exceptions

Here is a list of things we want to allow but have not found the proper eslint config/plugin to support our style
  - Snake case attributes for API payloads
    + Workaround: wrap the block in eslint disable/enable
    ```
    /*eslint-disable camelcase*/
    .insert({
        created_at: NOW,
        deleted_at: null,
        description: attrs.description,
        id: attrs.id,
        name: attrs.name,
        updated_at: NOW,
        user_id: user.id,
    }, '*')
    /*eslint-enable camelcase*/
    ```
  - ...
